import { Routes } from '@angular/router';
import { HomeComponent } from '../components/Home/home.component';
import { CartComponent } from '../components/Cart/cart.component';
import { SpecialOfferComponent } from '../components/SpecialOffer/specialOffer.component';
import { ProductDetailComponent } from '../components/Product/ProductDetail/productDetail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'specialOffer',
        component: SpecialOfferComponent
    },
    {
        path: 'productDetail',
        component: ProductDetailComponent
    }
];
