import { useState } from "react"
import type { Meta, StoryFn } from "@storybook/react"
import BottomSheet from "."
import { Button } from "../Button"
import React from "react"

export default {
  title: "Components/BottomSheet",
  component: BottomSheet,
  args: {
    isExpandOnContentDrag: true,
    isShowTopHandler: true,
    isScrollLocking: false,
    isOnNavigationMenu: false,
    isFullPage: false,
    title: "Bottom Sheet Example",
    children: <div>محتوای تستی باتم شیت</div>,
  },
  argTypes: {
    isExpandOnContentDrag: { control: "boolean" },
    isOnNavigationMenu: { control: "boolean" },
    isShowTopHandler: { control: "boolean" },
    isScrollLocking: { control: "boolean" },
    isFullPage: { control: "boolean" },
    title: { control: "text" },
  },
} as Meta

type Story = StoryFn<typeof BottomSheet>

const Template: Story = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full h-full flex flex-col justify-end">
      <Button onClick={toggleBottomSheet} label="باز کردن باتم شیت" isFullWidth size="medium" className="mb-4" />
      <BottomSheet {...args} isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: "باتم شیت عادی",
}

export const FullPage = Template.bind({})
FullPage.args = {
  isFullPage: true,
  title: "باتم شیت تمام صفحه",
}

export const WithoutTopHandler = Template.bind({})
WithoutTopHandler.args = {
  isShowTopHandler: false,
  title: "باتم شیت بدون تریگر",
}

export const ScrollLocking = Template.bind({})
ScrollLocking.args = {
  isScrollLocking: true,
  title: "باتم شیت بدون اسکرول",
}

