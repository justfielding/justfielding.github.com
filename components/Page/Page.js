export const Page = ({ children }) => (
  <div className="page">
    {children}
    <style jsx>
      {`
        .page {
          max-width: 500px;
          margin: 60px auto;
        }
      `}
    </style>
  </div>
);

export default Page;
