# Setting up Slow-Mo.

## Beginning

Slow-Mo can help you to create a unique experience in your level, but they can be sometimes complicated. We will explain how they work on this page.

## Behaviour 

They work on Unity's timescale system where once the component becomes active, it sets it to the value specified and speeds up the game after a bit.

* When it is set to one, The game runs normal.
* When it is set to 0.5, The game runs at half speeds
* When it is set to 0.25, the game runs at quarter of its speed, This is usually a sweet spot when using Slow-Mo.

## Setup

We will create a trigger that when the player enters, slows the game down. First, start by creating an empty gameobject in the scene by pressing `CTRL + SHIFT + N`.

Select it and add the `Slow Mo` component to it. Set the amount field to the amount you want to slow down the game to(0.25 is recommended).

<img src="https://coolboi21.github.io/Rude-Docs/Components/assets/slomo-component.png?raw=true" alt="slowmo settings" width="100%" height="100%" >

Now drag this gameobject into your assets window.

---

Now we will create the trigger to activate it. Add a box collider and make sure its set to a trigger, then we add a `Object Spawner` component to it, where we set the spawnables list to 1 and drag in the previously created slow mo gameobject *FROM ASSETS! NOT THE SCENE!* 

After that, attach a `Object Activator` component to it and in the `OnActivate` method, select the same gameobject that has these 2 scripts, where we click on "No Function" and set it to `ObjectSpawner.SpawnObject(int)` leaving the int as 0.

<img src="https://coolboi21.github.io/Rude-Docs/Components/assets/obj-activator-slomo-tut.png" alt="activator slowmo" width="75%" height="75%" >

It isnt recommended to do this, but you also can add this to waves (they already slow down the game on finish) by removing the box collider trigger and adding it to the last wave's "To activate" list.

--- 

Credits to eternalunion and luka for the images from the Rude Wiki.