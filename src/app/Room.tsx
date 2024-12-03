"use client";

import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense";
import { useSearchParams } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { LiveMap } from "@liveblocks/core";
import { Loading } from "@/components/Loading";

export function Room({ children }: { children: ReactNode }) {

  const roomId = generateRandomRoomId()

  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <RoomProvider
        id={roomId}
        initialPresence={{ presence: undefined }}
        initialStorage={{ records: new LiveMap() }}
      >
        <ClientSideSuspense fallback={<Loading />}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

function generateRandomRoomId(): string {
  return `${Math.random().toString(36).substring(2, 10)}`;
}
