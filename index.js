/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
export default async ({ core, context, github }) => {
  core.setOutput("time", Date.now());

  console.log(JSON.stringify(github));
  console.log(JSON.stringify(context));
  console.log(process.cwd());
};
