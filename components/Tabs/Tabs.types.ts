export type TabItem = {
  key: string;
  label: string;
};

export interface TabsProps {
  tabs: TabItem[];
  onSelectTab?: (selectedTab: TabItem) => void;
  selectedTabKey?: TabItem["key"];
}
