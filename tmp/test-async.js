async function asyncF() {
  console.log('async')
  await anotherAsyncF()
  // anotherSyncF()
}

async function anotherAsyncF() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('another async');
      resolve(1)
    }, 500)
  })
}

function anotherSyncF() {
  console.log('another sync')
}

function syncF() {
  console.log('sync')
}

async function main() {
  await asyncF()
  syncF()
}

main()
