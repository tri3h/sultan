import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import CatalogPage from "./pages/catalog/CatalogPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { MemoryRouter } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import CartPage from "./pages/cart/CartPage";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { RouteNames } from "./routes";
import filterReducer from "./store/reducers/filter";
import * as utils from "./utils/utils";
import * as filterActions from "./store/reducers/filter/action-creators";

describe("tests", () => {
    beforeEach(() => {
        jest.spyOn(utils, "getImageByName").mockImplementation(() => "");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Header is present on the cart page", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CartPage />
                </MemoryRouter>
            </Provider>
        );
        const header = screen.queryByTestId("header");
        expect(header).toBeInTheDocument();
    });

    test("Expand btn hides after being clicked", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CatalogPage />
                </MemoryRouter>
            </Provider>
        );
        const btn = screen.getByTestId("checkbox-list-expand");
        fireEvent.click(btn);
        expect(btn).not.toBeInTheDocument();
    });

    test("Input value changes when user types", async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CatalogPage />
                </MemoryRouter>
            </Provider>
        );
        const search = screen.getAllByPlaceholderText("Поиск...")[1];
        await act(async () => {
            userEvent.type(search, "123");
        });
        expect(search.value).toBe("123");
    });

    test("Error shows when saving product with empty fields", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AdminPage />
                </MemoryRouter>
            </Provider>
        );
        const btn = screen.getAllByTestId("admin-save-btn")[0];
        fireEvent.click(btn);
        const error = screen.queryByText("Все поля должны быть заполнены");
        expect(error).toBeInTheDocument();
    });

    test("Cart matches snapshot", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CatalogPage />
                </MemoryRouter>
            </Provider>
        );
        const cart = screen.getByTestId("cart-icon-container");
        expect(cart).toMatchSnapshot();
    });

    test("Open catalog page when route is incorrect", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/123456"]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByTestId("catalog-page-main")).toBeInTheDocument();
    });

    test("Click on the cart icon in header opens cart page", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[RouteNames.CATALOG]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        const cartIcon = screen.getByTestId("cart-icon-container");
        fireEvent.click(cartIcon);
        expect(screen.queryByTestId("catalog-page-main")).toBeNull();
        expect(screen.getByTestId("cart-page-main")).toBeInTheDocument();
    });

    test("Succesfully change product page in filter reducer", () => {
        const state = filterReducer(
            undefined,
            filterActions.FilterActionCreators.setProductPage(2)
        );
        expect(state.page).toBe(2);
    });

    test("Click on care type block changes care type checkbox", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CatalogPage />
                </MemoryRouter>
            </Provider>
        );
        const checkbox = screen.getAllByTestId("checkbox-input")[0];
        const block = screen.getAllByTestId("block-item")[0];
        expect(checkbox).not.toBeChecked();
        fireEvent.click(block);
        expect(checkbox).toBeChecked();
    });

    test("Chosen option in select shows as default value in input", async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AdminPage />
                </MemoryRouter>
            </Provider>
        );
        const select = screen.getByTestId("admin-type-select");
        const option = screen.getAllByTestId("admin-type-option")[1];
        await act(async () => {
            userEvent.selectOptions(select, option.value);
        });
        const input = screen.getByTestId("admin-type-input");
        expect(option.value).toBe(input.value);
    });
});
