import './index.css'

const TabItem = props => {
  const {tabItem, isActiveTabId, onClickTabItem} = props
  const {tabId, displayText} = tabItem
  const currentTab = isActiveTabId === tabId && 'colored-tab'

  const onTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`btn-item ${currentTab}`}
        type="button"
        onClick={onTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
