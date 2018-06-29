import React from 'react'
import { Library, LiveEditor } from '@compositor/kit'
import SideNav from './doc-components/SideNav'
import MergeBox from './demos/MergeBox'
import MergeButton from  './demos/MergeButton'

const examples = [
  {
    name: 'MergeBox',
    element: (
      <span className='mr-2'>
        <LiveEditor code={`<MergeBox state='pending' numCommits={21} repoUrl={'https://github.com/primer/primer-react'} branchName={'master'}/>`} scope={{MergeBox}}/>
      </span>
    )
  },
  {
    name: 'MergeButton',
    element: (
      <span className='mr-2'>
        <LiveEditor code={`<MergeButton scheme='primary'/>`} scope={{MergeButton}}/>
      </span>
    )
  }
]

const DemoPage = () => {
  const basename = process.env.NODE_ENV === 'development' ? '/demos' : '/primer-react/demo'
  return (
    <Library
      basename={basename}
      title='Demo Library'
      examples={examples}
      renderSideNav={({
      title,
      examples,
    }) => (
      <SideNav title={title} examples={examples}/>
    )}/>
  )
}

export default DemoPage