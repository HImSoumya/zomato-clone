import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Fragment } from "react";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Fragment>
      {breadcrumbs.map(({ breadcrumb }, index) => (
        <Fragment key={breadcrumb.key}>
          {index > 0 && (
            <span className="mx-2 text-[10px] text-gray-500">/</span>
          )}
          <span className="text-gray-500 hover:underline text-[14px]">
            {breadcrumb}
          </span>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Breadcrumbs;
