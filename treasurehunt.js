const treasure = (location) => {
  // alert(location)
  // alert(rainbowtreasure)
  // alert(bomb)

  if (location === rainbowTreasure) {
    alert("Treasure - You Win")
    document.getElementById(location).innerHTML = "💰"
    setTimeout(() => {window.location.reload(); }, 550)
  } else if (location === bomb) {
    alert("Bomb - You Lose")
    document.getElementById(location).innerHTML = "💣"
    setTimeout(() => {window.location.reload(); }, 550)
  } else if (treasure === bomb) {
    location.reload()
  } else { alert(location)}
}

var rainbowTreasure = Math.floor( Math.random() * 8 )
var bomb = Math.floor( Math.random() * 8 )

