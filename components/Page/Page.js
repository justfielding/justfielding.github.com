export const Page = ({ children }) => (
  <div className="main">
    <div className="page">{children}</div>
    <style jsx>{`
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
