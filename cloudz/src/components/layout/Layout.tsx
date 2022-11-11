import React, { ReactNode, useEffect, useState } from "react";
import "./../../styles/components/layout/layout.css";
interface Props {
	children?: ReactNode;
}
const Layout = ({ children }:Props) => {


	return (
		<>
			<div className="cloudz-layout-container">{children}</div>
		</>
	);
};

export default Layout;
