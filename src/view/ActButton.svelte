<script>
</script>

<div class="actbutton action" on:click on:mouseover on:mouseleave>
   <div><span><slot>A</slot></span></div>
</div>
<!-- <div class="actbutton action">
   <div><span>2</span></div>
</div> -->

<!-- <div class="actbutton action">
   <div><span>3</span></div>
</div>
<div class="actbutton action">
   <div><span>F</span></div>
</div>

<div class="actbutton action">
   <div><span>R</span></div>
</div> -->
<style lang="scss">
   @use "sass:color";

   .actbutton {
      font-family: Pathfinder2eActions;
      cursor: pointer;
      // line-height: 1.5em;
      width: 50px;
      // height: 1.5em;
      font-size: xx-large;
      /* Background/Dark */
      background-color: #e7d9cf;
      /* Bastard/Soft border */
      border: 2px solid rgba(254, 254, 254, 0.28);
      /* Hard Shadow/Close */
      box-shadow: 0px 0px 2px black, 0px 4px 4px rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      text-align: center;
      justify-content: center;
      transition: 0.1s;

      div {
         transform: translateY(-2px);
      }
      span {
         // text-shadow:
         // 1px 1px 1px white,
         // -1px -1px 1px white,
         // -1px 1px 1px white,
         // 1px -1px 1px white;
         text-shadow: 0px 1px 1px white;
      }

      &:hover {
         background-color: #f1e6de;
         transform: scale(1.3);
         box-shadow: 0px 0px 2px black, 0px 6px 6px rgba(0, 0, 0, 0.15);
      }
   }
</style>
