import { Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { GiohangComponent } from './giohang/giohang.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { CtspComponent } from './ctsp/ctsp.component';
import { TimkiemComponent } from './timkiem/timkiem.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';

export const routes: Routes = [
    { path: '', redirectTo: 'trangchu', pathMatch: 'full' },
    { path: 'trangchu', component: TrangchuComponent },
    { path: 'dangnhap', component: DangnhapComponent },
    { path: 'dangky', component: DangkyComponent },
    { path: 'giohang', component: GiohangComponent },
    { path: 'lienhe', component: LienheComponent },
    { path: 'tintuc', component: TintucComponent },
    { path: 'sanpham', component: SanphamComponent },
    { path: 'ctsp/:id', component: CtspComponent },
    { path: 'timkiem', component: TimkiemComponent},
    { path: 'doimatkhau', component: DoimatkhauComponent}
];
