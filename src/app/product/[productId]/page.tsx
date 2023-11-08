import React from "react";

export default function ProductDetail({
    params,
}: {
    params: { productId: string };
}): React.ReactElement {
    return <div>{params.productId}</div>;
}
