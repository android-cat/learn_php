import "./bootstrap";
import "../css/app.css";
import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
    const title: string = "Laravel 9 Mix with TypeScript React !!";
    return <h1>{title}</h1>;
};
const container = document.getElementById('app') as HTMLBaseElement;
const root = createRoot(container);
root.render(<App />);