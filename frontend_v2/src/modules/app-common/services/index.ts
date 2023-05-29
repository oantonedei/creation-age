
import { LoaderService } from "./loader.service";
import { NavLoaderService } from "./nav-loader.service";
import { SpinnerService } from "./spinner.service";
import { ToastService } from "./toast.service";
import { DialogService } from './dialog.service';

export const services = [LoaderService, NavLoaderService, SpinnerService, ToastService,DialogService];

export * from './loader.service';
export * from './nav-loader.service';
export * from './spinner.service';
export * from './toast.service';
export * from './dialog.service';
export * from './alert.service';
export * from './app.service';