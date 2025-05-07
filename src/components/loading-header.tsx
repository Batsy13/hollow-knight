'use client'

import { LoaderCircleIcon } from "lucide-react";
import { useLinkStatus } from "next/link"

export const LoadingHeader = () => {

    const pending = useLinkStatus();

    return pending ? (
        <div className="animate-spin">
            <LoaderCircleIcon size={20} color="white" />
        </div>
    ) : null
}