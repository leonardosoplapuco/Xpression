import './ServersTable.css'

function ServersTable() {
    return(
		<div className="ServersTable">
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
							<a href="https://www.xabber.com/account/auth/signup/">
								server_1
							</a>
						</td>
						<td>15.7 K</td>
						<td>North America</td>
						<td>★★★★★</td>
					</tr>
					<tr>
						<td>
							<a href="https://www.xabber.com/account/auth/signup/">
								server_2
							</a>
						</td>
						<td>10.2 K</td>
						<td>North America</td>
						<td>★★★★☆</td>
					</tr>
					<tr>
						<td>
							<a href="https://www.xabber.com/account/auth/signup/">
								server_3
							</a>
						</td>
						<td>8.6 K</td>
						<td>North America</td>
						<td>★★★★☆</td>
					</tr>
					<tr>
						<td>
							<a href="https://www.xabber.com/account/auth/signup/">
								server_4
							</a>
						</td>
						<td>5.1 K</td>
						<td>Europe</td>
						<td>★★★★☆</td>
					</tr>
					<tr>
						<td>
							<a href="https://www.xabber.com/account/auth/signup/">
								server_5
							</a>
						</td>
						<td>3.7 K</td>
						<td>Europe</td>
						<td>★★★☆☆</td>
					</tr>
					<tr>
						<td>
							<a href="https://www.xabber.com/account/auth/signup/">
								server_6
							</a>
						</td>
						<td>871</td>
						<td>Brazil</td>
						<td>★★★☆☆</td>
					</tr>
				</tbody>
			</table>
		</div>
    );
}

export default ServersTable;
