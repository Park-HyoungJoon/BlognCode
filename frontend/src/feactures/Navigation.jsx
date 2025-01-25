import React from "react";

const Navigation = () => {
	return (
		<div id="navigation" className="Navigation">
			<nav>
				<ul>
					<li>Browse
					<div className="dropdown" id="dropdown">
						<ul>
							<li>first</li>
							<li>first</li>
							<li>first</li>
						</ul>
					</div>
					</li>
					
					<li>My list
					<div className="dropdown" id="dropdown">
						<ul>
							<li>Second</li>
							<li>Second</li>
							<li>Second</li>
						</ul>
					</div></li>
					<li>Top picks
					<div className="dropdown" id="dropdown">
						<ul>
							<li>Third</li>
							<li>Third</li>
							<li>Third</li>
						</ul>
					</div></li>
					<li>Recent
					<div className="dropdown" id="dropdown">
						<ul>
							<li>Fourth</li>
							<li>Fourth</li>
							<li>Fourth</li>
						</ul>
					</div></li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation;