import Meta from '../Meta';

export const Page = ({ children }) => (
  <div className="main">
    <Meta />
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
