const el = document.getElementById('dataTable');
const star = 6;

axios
  .get('data.json')
  .then((response) => {
    console.log(response);

    el.innerHTML = renderFKGs(response.data, star);
  });

function renderFKGs(fkgs, star = 5) {
  const filteredFKGs = fkgs.filter((e) => e.star == star);
  const sortedFKGs = filteredFKGs.sort((a, b) => b.stats.total - a.stats.total);
  return `
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>ID</th>
          <th>Name</th>
          <th>Attribute</th>
          <th>Nation</th>
          <th>Total stats</th>
          <th>Active skill name</th>
          <th>Numbers of passive skills</th>
        </tr>
      </thead>
      
      <tbody>
        ${sortedFKGs.map((fkg) => renderFKG(fkg)).join("")}
      </tbody>
    </table>
  `;
}

function renderFKG(fkg) {
  return `
    <tr>
      <td><img src="${fkg.images[fkg.images.length - 1]}"></td>
      <td>${fkg.id}</td>
      <td>${fkg.name}</td>
      <td>${fkg.attribute}</td>
      <td>${fkg.nation}</td>
      <td>${fkg.stats.total}</td>
      <td>${fkg.skills.active.name}</td>
      <td>${fkg.skills.passive && fkg.skills.passive.length}</td>
    </tr>
  `;
}
