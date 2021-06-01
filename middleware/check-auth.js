export default function(context) {
  console.log("Check Auth");
  if (process.client) {
    context.store.dispatch("initAuth", context.req);
  }
}
