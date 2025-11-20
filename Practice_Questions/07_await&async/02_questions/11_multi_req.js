function multiRequest() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

  Promise.all(
    urls.map((url) => {
      return fetch(url).then((res) => res.json());
    })
  )
  .then((dataArray) => {
    dataArray.forEach((data) => {
      console.log(data.title);
    });
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });
}

multiRequest();


async function multiRequest() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

  try {
    const responses = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url);
        return res.json();
      })
    );

    responses.forEach((data) => {
      console.log(data.title);
    });

  } catch (error) {
    console.log("Error occurred:", error);
  }
}

multiRequest();
