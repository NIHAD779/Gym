import React from 'react'
import { Drawer } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
const [opened , setOpened] = useState(false)

export const LinkComponents =({link,name}) => {
    <Link to = {link} >
        <p>{name}</p>
    </Link>
};


export const NavbarDrawer = () => {
    <>
    <Drawer>
        opened = {opened}
        onClose = {()=> setOpened(false)}
        title = "responsive"

    </Drawer>

    <Group>
        <Button onClick = {() => setOpened(true)}> Open Drawer </Button>
    </Group>
    </>



}

