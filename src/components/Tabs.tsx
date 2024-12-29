import React from 'react';
import cn from 'classnames';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = props => {
  const { tabs } = props;

  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tabId === tab.id) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': activeTab?.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
