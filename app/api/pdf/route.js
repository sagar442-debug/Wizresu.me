export async function GET() {
  let dogs = [{ message: "There are non dogs in this api" }];
  return new Response(JSON.stringify(dogs), {
    status: 200,
  });
}
