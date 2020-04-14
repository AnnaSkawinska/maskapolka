import React from "react"
import PropTypes from "prop-types"
import "./Articles.scss"
import { BlogPostType } from "~/types"
import { ArticleTile } from "@components"
import { Link } from "gatsby"

const Articles = ({ posts }) => {
  return (
    <section className="articles section">
      <h2 className="heading-primary">Aktualności:</h2>
      <p className="articles__paragraph heading-secondary">
        Staramy się na bieąco pisać o tym, co się dzieje wokół akcji i nie
        tylko.
      </p>
      <ul className="articles__list">
        {posts.map(post => (
          <li className="articles__list-item" key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              <ArticleTile
                title={post.title}
                excerpt={post.description.childMarkdownRemark.excerpt}
                image={post.heroImage}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

Articles.propTypes = { posts: PropTypes.arrayOf(BlogPostType).isRequired }

export default React.memo(Articles)