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
import * as affinity from "@allied-solutions/affinity";
import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
console.log("affinity", affinity);
const Heart = () => {
  const [activeBar, setActiveBar] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef(null);

  return (
    <>
      <Header activeBar={activeBar} />
      <Navigation activeBar={activeBar} setActiveBar={setActiveBar} />

      <Main
        className={activeBar ? "main-content" : "main-content with-sidebar"}
      >
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
              elit. Non doloribus omnis, architecto soluta quisquam molestiae
              nisi voluptate libero dolor harum aspernatur est exercitationem
              deleniti tempore perferendis impedit vitae earum aliquid.
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
              elit. Non doloribus omnis, architecto soluta quisquam molestiae
              nisi voluptate libero dolor harum aspernatur est exercitationem
              deleniti tempore perferendis impedit vitae earum aliquid.
            </P>
            <div>
              <>
                <ButtonDiv
                  ref={triggerRef}
                  id="Button--collapseBasicUsage"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                  mb={4}
                >
                  Click to {isOpen ? "collapse" : "expand"}
                </ButtonDiv>

                <Collapse
                  id="Collapse--basicUsage"
                  isOpen={isOpen}
                  triggerRef={triggerRef}
                  onHide={() => console.log("hide")}
                  onHidden={() => console.log("hidden")}
                  onShow={() => console.log("show")}
                  onShown={() => console.log("shown")}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas nihil saepe illum voluptates eaque, numquam
                    voluptatibus minus non ducimus, amet sequi facilis cumque
                    eum hic officiis laborum repellendus quisquam expedita.
                  </p>
                </Collapse>
              </>
            </div>
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
              elit. Non doloribus omnis, architecto soluta quisquam molestiae
              nisi voluptate libero dolor harum aspernatur est exercitationem
              deleniti tempore perferendis impedit vitae earum aliquid.
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
      </Main>
    </>
  );
};

export default Heart;
