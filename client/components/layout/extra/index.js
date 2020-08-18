import React, { useContext } from 'react'

import { TagContext } from '../../../store/tag'

import Tag from '../../tag'

import styles from './extra.module.css'

function Extra({ marginTop = 24 }) {
  const { tagState } = useContext(TagContext)

  return (
    <div className={styles.container}>
      <div
        className={styles.tagContainer}
        style={{ marginTop: `${marginTop}px` }}
      >
        <h4>Popular Tags</h4>
        <div>
          {tagState.map((tag) => (
            <Tag key={tag._id} count={tag.count}>{tag._id}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Extra
