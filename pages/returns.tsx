export default function Returns() {
  return (
    <div className="bg-gray-800">
      <article className="mx-auto max-w-2xl space-y-12 px-6 py-24 dark:bg-gray-800 dark:text-gray-50">
        <div className="dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-bold">Returns Information</h2>
          <p className="mb-4">
            We want you to be completely satisfied with your purchase. If you
            need to return an item for any reason, we offer free returns within
            30 days of purchase.
          </p>
          <p className="mb-4">
            To initiate a return, please contact our{" "}
            <a href="/contact" className="text-blue-500 hover:text-blue-600">
              customer service
            </a>{" "}
            team and provide your order number and the reason for the return. We
            will provide you with a return label and instructions on how to
            proceed.
          </p>
          <p className="mb-4">
            Returned items must be in new, unused condition with all original
            tags and packaging. Once we receive your return, we will inspect it
            and issue a refund to your original form of payment within 5-7
            business days.
          </p>
        </div>
      </article>
    </div>
  );
}
