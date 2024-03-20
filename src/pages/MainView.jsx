import React from "react";
import {
  Box,
  Tile,
  ButtonGroup,
  ButtonDiv,
  Button,
  H2,
  P,
  Main,
  Collapse,
} from "@allied-solutions/affinity";
export default function MainView() {
  return (
    <div>
      {" "}
      <Box>
        <Tile m={12} mt={36}>
          <Tile.Header>
            <H2
              fontSize={3}
              typeStyle={"labelLarge"}
              color="gray1000"
              fontWeight="bold"
            >
              This is a tile
            </H2>
          </Tile.Header>
          <P>
            Some content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Non doloribus omnis, architecto soluta quisquam molestiae nisi
            voluptate libero dolor harum aspernatur est exercitationem deleniti
            tempore perferendis impedit vitae earum aliquid.
          </P>
          <Tile.Footer>
            <ButtonGroup justifyContent="space-between">
              <ButtonGroup.Button
                id="Tile__Button--cancel"
                variant="darkGray"
                outlined
                rounded
              >
                Cancel
              </ButtonGroup.Button>
              <ButtonGroup.Button id="Tile__Button--next" rounded>
                Next
              </ButtonGroup.Button>
            </ButtonGroup>
          </Tile.Footer>
        </Tile>

        <Tile m={12}>
          <Tile.Header>
            <H2
              fontSize={3}
              typeStyle={"labelLarge"}
              color="gray1000"
              fontWeight="bold"
            >
              This is a tile
            </H2>
          </Tile.Header>
          <P>
            Some content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Non doloribus omnis, architecto soluta quisquam molestiae nisi
            voluptate libero dolor harum aspernatur est exercitationem deleniti
            tempore perferendis impedit vitae earum aliquid.
          </P>

          <Tile.Footer>
            <ButtonGroup justifyContent="space-between">
              <ButtonGroup.Button
                id="Tile__Button--cancel"
                variant="darkGray"
                outlined
                rounded
              >
                Cancel
              </ButtonGroup.Button>
              <ButtonGroup.Button id="Tile__Button--next" rounded>
                Next
              </ButtonGroup.Button>
            </ButtonGroup>
          </Tile.Footer>
        </Tile>

        <Tile m={12}>
          <Tile.Header>
            <H2
              fontSize={3}
              typeStyle={"labelLarge"}
              color="gray1000"
              fontWeight="bold"
            >
              This is a tile
            </H2>
          </Tile.Header>
          <P>
            Some content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Non doloribus omnis, architecto soluta quisquam molestiae nisi
            voluptate libero dolor harum aspernatur est exercitationem deleniti
            tempore perferendis impedit vitae earum aliquid.
          </P>
          <Tile.Footer>
            <ButtonGroup justifyContent="space-between">
              <ButtonGroup.Button
                id="Tile__Button--cancel"
                variant="darkGray"
                outlined
                rounded
              >
                Cancel
              </ButtonGroup.Button>
              <ButtonGroup.Button id="Tile__Button--next" rounded>
                Next
              </ButtonGroup.Button>
            </ButtonGroup>
          </Tile.Footer>
        </Tile>
      </Box>
    </div>
  );
}
