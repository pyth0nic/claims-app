import React, { useState } from "react";

export default function TaskBoard(props) {
    const [user] = useState(props.user);
    return (
		<div style={{paddingRight: '1em', paddingLeft: '0.8em'}}>
			<div class="box">
				<article class="media">
					<div class="media-left">
					<figure class="image is-64x64">
						<img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"></img>
					</figure>
					</div>
					<div class="media-content">
						<div class="content">
							<p>
							<strong>{user}</strong>
							<br/>
							</p>
						</div>
					</div>
				</article>
			</div>
			<aside class="menu">
			<p class="menu-label">
				General
			</p>
			<ul class="menu-list">
				<li><a>Customers</a></li>
			</ul>
			<p class="menu-label">
				Transactions
			</p>
			<ul class="menu-list">
				<li><a>Payments</a></li>
				<li><a>Transfers</a></li>
			</ul>
			</aside>
		</div>
	);
}