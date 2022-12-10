const paginate = (followers) => {
  const numberOnPage = 10;
  const itemsOnPages = Math.ceil(followers.length / numberOnPage);

  const newArray = Array.from({ length: itemsOnPages }, (_, index) => {
    let start = numberOnPage * index;
    return followers.slice(start, start + numberOnPage);
  });
  return newArray;
};

export default paginate;
