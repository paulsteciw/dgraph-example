const fullName = ({ parent: { firstName, lastName } }) => `${firstName} ${lastName}`

async function todoTitles({ graphql }) {
  const results = await graphql('{ queryTodo { title } }')
  return results.data.queryTodo.map(t => t.title)
}

self.addGraphQLResolvers({
  "User.fullName": fullName,
  "Query.todoTitles": todoTitles,
})
