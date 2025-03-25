import React from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform, } from "motion/react";
import { useRef } from "react";
import { cn } from "../utils";

export function Button({ borderRadius = "2rem", children, as: Component = "button", containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}) {
    return (
        <Component
            className={cn(
                "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
                containerClassName
            )}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}>
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
                <MovingBorder duration={duration} rx="50%" ry="50%">
                    <div
                        className={cn(
                            "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
                            borderClassName
                        )} />
                </MovingBorder>
            </div>
            <div
                className={cn(
                    "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-black antialiased backdrop-blur-xl",
                    className
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}>
                {children}
            </div>
        </Component>
    );
}

export const MovingBorder = ({
    children,
    duration = 3000,
    rx = "20",
    ry = "20",
    strokeColor = "white",
    strokeWidth = 3,
    ...otherProps
}) => {
    const pathRef = useRef(null);
    const progress = useMotionValue(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
    const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <div className="relative w-full h-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                {...otherProps}
            >
                <path
                    ref={pathRef}
                    d="M 5,5 H 95 A 10,10 0 0 1 105,15 V 85 A 10,10 0 0 1 95,95 H 5 A 10,10 0 0 1 -5,85 V 15 A 10,10 0 0 1 5,5 Z"
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                    width: "10px",
                    height: "10px",
                    backgroundColor: strokeColor,
                    borderRadius: "50%",
                }}
            />
            <div className="relative">{children}</div>
        </div>
    );
};
