"use client";

import { Room } from "@/app/Room";
import { Chat } from "@/components/chat";
import { ReactionBar } from "@/components/reaction-bar";
import { StorageTldraw } from "@/components/StorageTldraw";
import { StreamPlayer } from "@/components/stream-player";
import { TokenContext } from "@/components/token-context";
import { LiveKitRoom } from "@livekit/components-react";
import { Box, Flex } from "@radix-ui/themes";

export default function HostPage({
  authToken,
  roomToken,
  serverUrl,
}: {
  authToken: string;
  roomToken: string;
  serverUrl: string;
}) {
  return (
    <TokenContext.Provider value={authToken}>
      <LiveKitRoom serverUrl={serverUrl} token={roomToken}>
        <Flex className="w-full h-screen">
          <Flex direction="column" className="flex-1">
            <Box className="flex-1 bg-gray-1">
              {/* Main content area */}
              <Room>
                <StorageTldraw />
              </Room>
            </Box>
            <ReactionBar />
          </Flex>
          <Flex direction="column" className="w-[280px] border-l border-accent-5 hidden sm:flex">
            <Box className="h-[200px] bg-white shadow-md">
              <StreamPlayer isHost />
            </Box>
            <Box className="flex-1 bg-accent-2">
              <Chat />
            </Box>
          </Flex>
        </Flex>
      </LiveKitRoom>
    </TokenContext.Provider>
  );
}

