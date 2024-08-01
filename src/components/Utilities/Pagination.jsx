const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center gap-4 text-color-primary text-md">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="rounded-xl hover:shadow hover:shadow-color-purple px-4 py-1 bg-gradient-to-r from-color-lightBlue to-color-blue hover:text-color-accent transition-all"
        >
          Previous
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="px-4 py-1 hover:shadow hover:shadow-color-purple rounded-xl bg-gradient-to-r from-color-lightBlue to-color-blue hover:text-color-accent transition-all"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
