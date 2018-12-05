const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === 'MarkdownRemark') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const postPage = path.resolve('src/_templates/post.js')
//     const categoryPage = path.resolve('src/_templates/category.js')
//     resolve(
//       graphql(`
//         {
//           posts: allMarkdownRemark {
//             edges {
//               node {
//                 fields {
//                   slug
//                 }
//                 frontmatter {
//                   title
//                   category
//                 }
//               }
//             }
//           }
//         }
//       `).then((result) => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         const posts = result.data.posts.edges

//         posts.forEach((edge, index) => {
//           const next = index === 0 ? null : posts[index - 1].node
//           const prev = index === posts.length - 1 ? null : posts[index + 1].node

//           createPage({
//             path: edge.node.fields.slug,
//             component: postPage,
//             context: {
//               slug: edge.node.fields.slug,
//               prev,
//               next,
//             },
//           })
//         })

//         let categories = []

//         _.each(posts, (edge) => {
//           if (_.get(edge, 'node.frontmatter.category')) {
//             categories = categories.concat(edge.node.frontmatter.category)
//           }
//         })

//         categories = _.uniq(categories)

//         categories.forEach((category) => {
//           createPage({
//             path: `/categories/${_.kebabCase(category)}`,
//             component: categoryPage,
//             context: {
//               category,
//             },
//           })
//         })
//       }),
//     )
//   })
// }

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // It is for absolute imports?
  // actions.setWebpackConfig({
  //   resolve: {
  //     modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  //   },
  // })
}

exports.onCreateBabelConfig = ({ actions }) => {
  if (process.env.NODE_ENV === 'production') {
    actions.setBabelPlugin({
      name: 'babel-plugin-emotion',
    })
    return
  }
  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
    options: {
      sourceMap: true,
    },
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'

    // Update the page.
    createPage(page)
  }
}
// Note: There is a convenient plugin that already does this work
// for you: gatsby-plugin-create-client-paths
