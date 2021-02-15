export const transition = {
    duration: 0.5,
    ease: [0.6, 0.05, 0.01, 0.9]
}

export const loaderVariants = {
    initial: {
        y: 0
    },
    hidden: {
        y: "-100%",
        transition: {
            duration: 0.3
        }
    }
}
export const teamMemberFilterVariants = {
    hovered: {
        opacity: 0.95,
        transition: {
            ...transition,
            duration: 0.3
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.15
        }
    }
}

export const teamTitleVariants = {
    hovered: {
        opacity: 1,
        transition: {
            ...transition,
            duration: 0.1
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.1
        }
    }
}
export const teamMemberDescriptionVariants = {
    hovered: {
        opacity: 0.95,
        transition: {
            ...transition,
            delay: .25,
            duration: 0.5
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.15
        }
    }
}

export const teamMemberContentVariants = {
    hovered: {
        height: "100%",
        opacity: 1,
        transition: {
            ...transition,
            duration: 0.3
        }
    },
    hidden: {
        height: "auto",
        opacity: 0,
        transition: {
            ...transition,
            duration: 0.15
        }
    }
}

export const teamMemberImageVariants = {
    hovered: {
        filter: "blur(10px)",
        transition: {
            ...transition,
            duration: 0.3
        }
    },
    hidden: {
        filter: "blur(0px)",
        transition: {
            ...transition,
            duration: 0.15
        }
    }
}

export const fixedNavbarAnim = {
    show: {
        y: 0,
        transition: {
            duration: 0.3
        }
    },
    hidden: {
        y: -80,
        transition: {
            duration: 0.15
        }
    }
}