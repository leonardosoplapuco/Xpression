import './ServersTable.css'

function ServersTable() {
    return(
		<div className="block-container">
			<div className="ServersTable">
				<h2 className="title">Most popular XMPP servers</h2>
				
				<table>
					<thead>
						<tr>
							<th><h2>Server</h2></th>
							<th><h2>Users</h2></th>
							<th><h2>Location</h2></th>
							<th><h2>Ranking</h2></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<a href="#">Xabber</a>
							</td>
							<td>15.7 K</td>
							<td>North America</td>
							<td className="stars">
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
							</td>
						</tr>
						<tr>
							<td><a href="#">Movim</a></td>
							<td>10.2 K</td>
							<td>North America</td>
							<td className="stars">
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#">Server 3</a>
							</td>
							<td>8.6 K</td>
							<td>North America</td>
							<td className="stars">
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star_half</span>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#">Server 4</a>
							</td>
							<td>5.1 K</td>
							<td>Europe</td>
							<td className="stars">
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star_half</span>
							</td>
						</tr>
						<tr>
							<td>
								<a href="#">Server 5</a>
							</td>
							<td>3.7 K</td>
							<td>Europe</td>
							<td className="stars">
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star</span>
								<span className="material-symbols-outlined">star_half</span>
								<span className="material-symbols-outlined">star_half</span>
								<span className="material-symbols-outlined">star_half</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
    );
}

export default ServersTable;
