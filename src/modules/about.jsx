import React from 'react'
import styled from 'styled-components'

import {
  PROFESSIONAL_SKILL,
  WORK_EXPERIENCE,
  PROJECT_EXPERIENCE,
  PERSONAL_HOMEPAGE,
} from './constant'

export default function AboutMe() {
  return (
    <div style={{ padding: '30px' }}>
      <ContainerDiv>
        <TitleDiv>个人主页</TitleDiv>
        <div>
          {Object.entries(PERSONAL_HOMEPAGE).map(([key, value]) =>
            (<div style={{ marginBottom: '5px' }} key={Math.random()}>
              <span style={{ width: '50px' }}>
                {`${key}: `}
              </span>
              <a
                href={value}
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                {value}
              </a>
            </div>),
          )}
        </div>
      </ContainerDiv>

      <ContainerDiv>
        <TitleDiv>专业技能</TitleDiv>
        <ul style={{ margin: 0 }}>
          {PROFESSIONAL_SKILL.map(item =>
            (<li key={Math.random()}>
              {item}
            </li>),
          )}
        </ul>
      </ContainerDiv>

      <ContainerDiv>
        <TitleDiv>工作经历</TitleDiv>
        {WORK_EXPERIENCE.map(({ timeQuantum, company, describe }) =>
          (<div key={Math.random()}>
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
      </ContainerDiv>

      <ContainerDiv>
        <TitleDiv>项目经历</TitleDiv>
        {PROJECT_EXPERIENCE.map(
          ({ timeQuantum, name, technologyStack, responsibleFor, describe }) =>
            (<div key={Math.random()}>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                <span style={{ marginRight: '10px' }}>
                  {name}
                </span>
                <span>
                  {timeQuantum}
                </span>
              </div>
              <div style={{ marginBottom: '10px', marginTop: '5px' }}>
                <div>
                  <b>项目描述: </b>
                  {describe}
                </div>
                <div>
                  <b>负责内容: </b>
                  {responsibleFor}
                </div>
                <div>
                  <b>技术栈: </b>
                  {technologyStack}
                </div>
              </div>
            </div>),
        )}
      </ContainerDiv>
    </div>
  )
}

const TitleDiv = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`
const ContainerDiv = styled.div`margin-bottom: 20px;`
