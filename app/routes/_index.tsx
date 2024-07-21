import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "theodore.tan" },
    {
      name: "description",
      content: "The personal website of Theodore Tan. I'm a full stack developer currently working as a Senior Frontend Developer at Shopify."
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl my-2">Theodore Tan</h1>
      <p className="my-1">👨‍💻 currently under construction...</p>
      <div className="my-1 flex space-x-2">
        <p>You can check out my GitHub <span className="sr-only">at github.com/theodoretan</span></p>
        <a
          className="text-blue-700 underline visited:text-purple-900"
          target="_blank"
          href="https://github.com/theodoretan"
          rel="noreferrer"
        >
          <img className="w-6" src="/images/github.svg" alt="Link to GitHub" />
        </a>
      </div>
    </div>
  );
}
