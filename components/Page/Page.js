export const Page = ({ children }) => (
  <div className="page">
    {children}
    <style jsx>
      {`
        .page {
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
      `}
    </style>
  </div>
);

export default Page;
