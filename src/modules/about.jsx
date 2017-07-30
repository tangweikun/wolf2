import React from 'react'
import styled from 'styled-components'

import {
  PROFESSIONAL_SKILL,
  WORK_EXPERIENCE,
  PROJECT_EXPERIENCE,
} from './constant'

export default function AboutMe() {
  return (
    <div style={{ padding: '30px' }}>
      <div>
        <TitleDiv>专业技能</TitleDiv>
        <ul>
          {PROFESSIONAL_SKILL.map(item =>
            (<li>
              {item}
            </li>),
          )}
        </ul>
      </div>
      <div>
        <TitleDiv>工作经历</TitleDiv>
        {WORK_EXPERIENCE.map(({ timeQuantum, company, describe }) =>
          (<div>
            <div>
              <span>
                {timeQuantum}
              </span>
              <span>
                {company}
              </span>
            </div>
            <div>
              {describe}
            </div>
          </div>),
        )}
      </div>
      <div>
        <TitleDiv>项目经历</TitleDiv>
        {PROJECT_EXPERIENCE.map(
          ({ timeQuantum, name, technologyStack, responsibleFor, describe }) =>
            (<div>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                <span>
                  {name}
                </span>
                <span>
                  {timeQuantum}
                </span>
              </div>
              <div>
                {describe}
              </div>
              <div>
                {responsibleFor}
              </div>
              <div>
                {technologyStack}
              </div>
            </div>),
        )}
      </div>
    </div>
  )
}

const TitleDiv = styled.div`font-size: 22px;`
