console.log("Starting.");

const func = () => {
  console.log('Running func');
  return new Promise( (resolve, reject) => {
    const toggle = false;

    if (toggle) setTimeout(() => {resolve('passed')}, 2500);
    else reject("false");
  });
};

func()
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
console.log('Just called func');