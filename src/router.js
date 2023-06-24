import Vue from 'vue';
import VueRouter from 'vue-router';
import PdfGeneratorHome from '@/pages/steps/';
import PdfGeneratorStep1 from '@/pages/steps/SearchAddress';
import PdfGeneratorStep2 from '@/pages/steps/Insee';
import PdfGeneratorStep3 from '@/pages/steps/InfoForm';
import PdfGeneratorStep4 from '@/pages/steps/Pdf';
import Home from '@/pages/home';
import Form from '@/pages/Form';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/form/:id?',
    component: Form,
  },
  {
    path: '/pdf-gen',
    component: PdfGeneratorHome,
    children: [
      {
        path: 'step/1',
        component: PdfGeneratorStep1,
      },
      {
        path: 'step/2',
        component: PdfGeneratorStep2,
      },
      {
        path: 'step/3',
        component: PdfGeneratorStep3,
      },
      {
        path: 'step/4',
        component: PdfGeneratorStep4,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
