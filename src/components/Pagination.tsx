import { PageBtn, SPagination } from "../styles";

interface PaginationProps {
  newsPerPage: number;
  totalNews: number;
  paginate: (number) => void;
  currentPage: number;
}

const Pagination = ({
  newsPerPage,
  totalNews,
  paginate,
  currentPage,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <SPagination>
      {pageNumbers.length > 0 && (
        <PageBtn
          onClick={() => {
            pageNumbers.find((pageNumber) => pageNumber === currentPage - 1) &&
              paginate(currentPage - 1);
          }}
        >
          {"<"}
        </PageBtn>
      )}

      {pageNumbers.map((pageNumber) => (
        <PageBtn
          className={pageNumber === currentPage && "selected"}
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
        >
          {pageNumber}
        </PageBtn>
      ))}
      {pageNumbers.length > 0 && (
        <PageBtn
          onClick={() => {
            pageNumbers.find((pageNumber) => pageNumber === currentPage + 1) &&
              paginate(currentPage + 1);
          }}
        >
          {">"}
        </PageBtn>
      )}
    </SPagination>
  );
};

export default Pagination;
