import React from 'react';
import { Layout as AntLayout } from 'antd';
import css from './Layout.module.css';
import ScalableGrid from '../components/SplitterGrid/SplitterGrid';

const { Header, Footer } = AntLayout;

const Layout = () => {
  return (
    <AntLayout className={css.height}>
      <Header>
        <div className={css.logo}>Intelogis</div>
      </Header>
      <ScalableGrid />
      <Footer className={css.footer}>Intelogis ©{new Date().getFullYear()}</Footer>
    </AntLayout>
  );
};

export default Layout;
